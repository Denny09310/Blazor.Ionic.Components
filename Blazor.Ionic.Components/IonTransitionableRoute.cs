using BlazorTransitionableRoute;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;
using Microsoft.JSInterop;

namespace Blazor.Ionic.Components;

public class IonTransitionableRoute : TransitionableRouteLayout
{
    private static string? _mode;

    [Inject]
    public IJSRuntime JSRuntime { get; set; } = default!;

    private string TransitioningClass => Transition.FirstRender ? "" : TransitioningEffect();

    protected override void BuildRenderTree(RenderTreeBuilder __builder)
    {
        int i = 0;

        __builder.OpenComponent<IonPage>(i++);
        __builder.AddComponentParameter(i++, nameof(IonPage.Class), TransitioningClass);
        __builder.AddComponentParameter(i, nameof(IonPage.ChildContent), Body);
        __builder.CloseComponent();
    }

#pragma warning disable S2696 // Instance members should not write to "static" fields

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);

        if (firstRender && _mode is null)
        {
            _mode = await JSRuntime.InvokeAsync<string>(
                "eval",
                "document.querySelector('html').getAttribute('mode')"
            );
        }
    }

#pragma warning restore S2696 // Instance members should not write to "static" fields

    private string TransitioningEffect()
    {
        return "animate__faster animate__animated animate__" + (Transition, _mode) switch
        {
            ({ IntoView: true, Backwards: false }, "md") => "fadeInUp",
            ({ IntoView: false, Backwards: true }, "md") => "fadeOutDown",
            ({ IntoView: true, Backwards: false }, "ios") => "fadeInRight",
            ({ IntoView: false, Backwards: true }, "ios") => "fadeOutRight",
            _ => "",
        };
    }
}