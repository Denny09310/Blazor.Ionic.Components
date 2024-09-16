using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;
using Microsoft.JSInterop;

namespace Blazor.Ionic.Components;

public partial class IonActionSheet : IonComponentBase, IAsyncDisposable
{
    [Parameter]
    public EventCallback<object> OnDidDismiss { get; set; }

    [Parameter]
    public EventCallback<object> OnDidPresent { get; set; }

    [Parameter]
    public string? Header { get; set; }

    [Parameter]
    public bool? IsOpen { get; set; }

    [Inject]
    public IJSRuntime JSRuntime { get; set; } = default!;

    public async ValueTask DisposeAsync()
    {
        await RemoveEventListenerAsync(OnDidDismiss, "didDismiss", HandleDidDismiss);
        await RemoveEventListenerAsync(OnDidPresent, "didPresent", HandleDidPresent);
        GC.SuppressFinalize(this);
    }

    protected override void BuildRenderTree(RenderTreeBuilder builder)
    {
        int i = 0;

        builder.OpenElement(i++, "ion-action-sheet");

        builder.AddAttribute(i++, "header", Header);
        builder.AddAttribute(i++, "is-open", ToAttribute(IsOpen));

        builder.AddMultipleAttributes(i++, AdditionalAttributes);

        builder.AddElementReferenceCapture(i, element => Element = element);

        builder.CloseElement();

        base.BuildRenderTree(builder);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);

        if (firstRender)
        {
            await AddEventListenerAsync(OnDidDismiss, "didDismiss", HandleDidDismiss);
            await AddEventListenerAsync(OnDidPresent, "didPresent", HandleDidPresent);

            await JSRuntime.InvokeVoidAsync("Object.assign", Element, new
            {
                Buttons = new object[]
                {
                    new { Text= "Cancel", Role = "cancek", Data = new { Action = "cancel" } }
                }
            });
        }
    }

    private async ValueTask HandleDidDismiss(object arg)
    {
        await OnDidDismiss.InvokeAsync(arg);
    }

    private async ValueTask HandleDidPresent(object arg)
    {
        await OnDidPresent.InvokeAsync(arg);
    }
}