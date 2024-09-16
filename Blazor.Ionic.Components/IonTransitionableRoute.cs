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

    private string TransitioningClass => Transition.IntoView ? "entering-view" : "leaving-view";

    protected override void BuildRenderTree(RenderTreeBuilder __builder)
    {
        int i = 0;

        __builder.OpenComponent<IonPage>(i++);
        __builder.AddComponentParameter(i++, nameof(IonPage.Class), TransitioningClass);
        __builder.AddComponentParameter(i, nameof(IonPage.ChildContent), Body);
        __builder.CloseComponent();
    }
}