using BlazorTransitionableRoute;
using Microsoft.JSInterop;

namespace Blazor.Ionic.Components.Services;

public class IonRouteTransitionInvoker(IJSRuntime js) : IRouteTransitionInvoker
{
    private readonly IJSRuntime _js  =js;

    public async Task InvokeRouteTransitionAsync(Transition transition)
    {
        if (transition.FirstRender) return;
        await _js.InvokeVoidAsync("Ionic.__interop.transition", new
        {
            Direction = transition.Backwards ? "back" : "forward"
        });
    }
}
