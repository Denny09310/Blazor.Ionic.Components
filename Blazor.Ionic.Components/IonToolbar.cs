using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;

namespace Blazor.Ionic.Components;

public partial class IonToolbar : IonComponentBase
{
    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object> AdditionalAttributes { get; set; } = [];

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public string? Color { get; set; }

    [Parameter]
    public string? Mode { get; set; }

    protected override void BuildRenderTree(RenderTreeBuilder builder)
    {
        int i = 0;

        builder.OpenElement(i++, "ion-toolbar");

        builder.AddAttribute(i++, "color", Color);
        builder.AddAttribute(i++, "mode", Mode);

        builder.AddMultipleAttributes(i++, AdditionalAttributes);

        builder.AddContent(i, ChildContent);

        builder.CloseElement();

        base.BuildRenderTree(builder);
    }
}