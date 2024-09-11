using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;
using Microsoft.AspNetCore.Components.Web;

namespace Blazor.Ionic.Components;

public partial class IonButton : IonComponentBase, IAsyncDisposable
{
    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object> AdditionalAttributes { get; set; } = [];

    [Parameter]
    public string? ButtonType { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public string? Color { get; set; }

    [Parameter]
    public bool? Disabled { get; set; }

    [Parameter]
    public string? Download { get; set; }

    [Parameter]
    public string? Expand { get; set; }

    [Parameter]
    public string? Fill { get; set; }

    [Parameter]
    public string? Form { get; set; }

    [Parameter]
    public string? Href { get; set; }

    [Parameter]
    public EventCallback<EventArgs> IonBlur { get; set; }

    [Parameter]
    public EventCallback<FocusEventArgs> IonFocus { get; set; }

    [Parameter]
    public string? Mode { get; set; }

    [Parameter]
    public string? Rel { get; set; }

    [Parameter]
    public string? RouterAnimation { get; set; }

    [Parameter]
    public string? RouterDirection { get; set; }

    [Parameter]
    public string? Shape { get; set; }

    [Parameter]
    public string? Size { get; set; }

    [Parameter]
    public string? Strong { get; set; }

    [Parameter]
    public string? Target { get; set; }

    [Parameter]
    public string? Type { get; set; }

    public async ValueTask DisposeAsync()
    {
        await RemoveEventListenerAsync(IonFocus, "ionFocus", HandleFocus);
        await RemoveEventListenerAsync(IonBlur, "ionBlur", HandleBlur);
        GC.SuppressFinalize(this);
    }

    protected override void BuildRenderTree(RenderTreeBuilder builder)
    {
        int i = 0;

        builder.OpenElement(i++, "ion-button");

        builder.AddAttribute(i++, "button-type", ButtonType);
        builder.AddAttribute(i++, "color", Color);
        builder.AddAttribute(i++, "disabled", ToAttribute(Disabled));
        builder.AddAttribute(i++, "download", Download);
        builder.AddAttribute(i++, "expand", Expand);
        builder.AddAttribute(i++, "fill", Fill);
        builder.AddAttribute(i++, "form", Form);
        builder.AddAttribute(i++, "href", Href);
        builder.AddAttribute(i++, "mode", Mode);
        builder.AddAttribute(i++, "rel", Rel);
        builder.AddAttribute(i++, "router-animation", RouterAnimation);
        builder.AddAttribute(i++, "router-direction", RouterDirection);
        builder.AddAttribute(i++, "shape", Shape);
        builder.AddAttribute(i++, "size", Size);
        builder.AddAttribute(i++, "strong", Strong);
        builder.AddAttribute(i++, "target", Target);
        builder.AddAttribute(i++, "type", Type);

        builder.AddMultipleAttributes(i++, AdditionalAttributes);

        builder.AddContent(i, ChildContent);

        builder.AddElementReferenceCapture(i, element => Element = element);

        builder.CloseElement();

        base.BuildRenderTree(builder);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await AddEventListenerAsync(IonFocus, "ionFocus", HandleFocus);
            await AddEventListenerAsync(IonBlur, "ionBlur", HandleBlur);
        }

        await base.OnAfterRenderAsync(firstRender);
    }

    #region Element Events

    private async ValueTask HandleBlur(EventArgs e)
    {
        await IonBlur.InvokeAsync(e);
    }

    private async ValueTask HandleFocus(FocusEventArgs e)
    {
        await IonFocus.InvokeAsync(e);
    }

    #endregion Element Events
}