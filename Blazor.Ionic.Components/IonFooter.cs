using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;

namespace Blazor.Ionic.Components;

public partial class IonFooter : IonComponentBase
{
    [Parameter]
    public string? Collapse { get; set; }

    [Parameter]
    public string? Mode { get; set; }

    [Parameter]
    public bool? Translucent { get; set; }

    protected override void BuildRenderTree(RenderTreeBuilder builder)
    {
        int i = 0;

        builder.OpenElement(i++, "ion-footer");

        builder.AddAttribute(i++, "collapse", Collapse);
        builder.AddAttribute(i++, "mode", Mode);
        builder.AddAttribute(i++, "translucent", ToAttribute(Translucent));

        builder.AddMultipleAttributes(i++, AdditionalAttributes);

        builder.AddContent(i, ChildContent);

        builder.CloseElement();

        base.BuildRenderTree(builder);
    }
}