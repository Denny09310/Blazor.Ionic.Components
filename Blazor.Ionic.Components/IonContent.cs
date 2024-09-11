using Blazor.Ionic.Components.Events;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;
using Microsoft.JSInterop;

namespace Blazor.Ionic;

public partial class IonContent : IonComponentBase, IAsyncDisposable
{
    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object> AdditionalParameters { get; set; } = [];

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public string? Color { get; set; }

    [Parameter]
    public string FixedSlotPlacement { get; set; } = "after";

    [Parameter]
    public bool? ForceOverscroll { get; set; }

    [Parameter]
    public bool? Fullscreen { get; set; }

    [Parameter]
    public EventCallback<ScrollCustomEvent> IonScroll { get; set; }

    [Parameter]
    public EventCallback<ScrollCustomEvent> IonScrollEnd { get; set; }

    [Parameter]
    public EventCallback<ScrollCustomEvent> IonScrollStart { get; set; }

    [Inject]
    public IJSRuntime JSRuntime { get; set; } = default!;

    [Parameter]
    public bool? ScrollEvents { get; set; }

    [Parameter]
    public bool? ScrollX { get; set; }

    [Parameter]
    public bool? ScrollY { get; set; } = true;

    public async ValueTask DisposeAsync()
    {
        await RemoveEventListenerAsync(IonScroll, "ionScroll", HandleScroll);
        await RemoveEventListenerAsync(IonScrollStart, "ionScrollStart", HandleScrollStart);
        await RemoveEventListenerAsync(IonScrollEnd, "ionScrollEnd", HandleScrollEnd);

        GC.SuppressFinalize(this);
    }

    #region Element Methods

    /// <summary>
    /// <para>Get the element where the actual scrolling takes place. This element can be used to subscribe to scroll events or manually modify scrollTop. However, it's recommended to use the API provided by ion-content: </para>
    /// <para>i.e. Using IonScroll, IonScrollStart, IonScrollEnd for scrolling events and <see cref="ScrollByPointAsync(double, double, double)"/> to scroll the content into a certain point.</para>
    /// </summary>
    public ValueTask<ElementReference> GetScrollElementAsync() => throw new NotImplementedException();

    /// <summary>
    /// Scroll by a specified X/Y distance in the component.
    /// </summary>
    public ValueTask ScrollByPointAsync(double x, double y, double duration) => Element.InvokeVoidAsync("scrollByPoint", x, y, duration);

    /// <summary>
    /// Scroll to the bottom of the component.
    /// </summary>
    public ValueTask ScrollToBottomAsync(double duration) => Element.InvokeVoidAsync("scrollToBottom", duration);

    /// <summary>
    /// Scroll to a specified X/Y location in the component.
    /// </summary>
    public ValueTask ScrollToPointAsync(double duration, double? x = null, double? y = null) => Element.InvokeVoidAsync("scrollToPoint", x, y, duration);

    /// <summary>
    /// Scroll to the top of the component.
    /// </summary>
    public ValueTask ScrollToTopAsync(double duration) => Element.InvokeVoidAsync("scrollToTop", duration);

    #endregion

    protected override void BuildRenderTree(RenderTreeBuilder builder)
    {
        int i = 0;

        builder.OpenElement(i++, "ion-content");

        builder.AddAttribute(i++, "color", Color);
        builder.AddAttribute(i++, "fixed-slot-placement", FixedSlotPlacement);
        builder.AddAttribute(i++, "force-overscroll", ToAttribute(ForceOverscroll));
        builder.AddAttribute(i++, "fullscreen", ToAttribute(Fullscreen));
        builder.AddAttribute(i++, "scroll-events", ToAttribute(ScrollEvents));
        builder.AddAttribute(i++, "scroll-x", ToAttribute(ScrollX));
        builder.AddAttribute(i++, "scroll-y", ToAttribute(ScrollY));

        builder.AddMultipleAttributes(i++, AdditionalParameters);

        builder.AddContent(i++, ChildContent);

        builder.AddElementReferenceCapture(i, element => this.Element = element);

        builder.CloseComponent();

        base.BuildRenderTree(builder);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await AddEventListenerAsync(IonScroll, "ionScroll", HandleScroll);
            await AddEventListenerAsync(IonScrollStart, "ionScrollStart", HandleScrollStart);
            await AddEventListenerAsync(IonScrollEnd, "ionScrollEnd", HandleScrollEnd);
        }

        await base.OnAfterRenderAsync(firstRender);
    }

    #region Element Events

    private async ValueTask HandleScroll(ScrollCustomEvent e)
    {
        await IonScroll.InvokeAsync(e);
    }

    private async ValueTask HandleScrollEnd(ScrollCustomEvent e)
    {
        await IonScrollEnd.InvokeAsync(e);
    }

    private async ValueTask HandleScrollStart(ScrollCustomEvent e)
    {
        await IonScrollStart.InvokeAsync(e);
    }

    #endregion
}