using Microsoft.AspNetCore.Components.Rendering;
using Microsoft.AspNetCore.Components;

namespace Blazor.Ionic.Components;

public partial class IonButtons : IonComponentBase
{
    [Parameter]
    public bool? Collapse { get; set; }

    protected override void BuildRenderTree(RenderTreeBuilder builder)
    {
        int i = 0;

        builder.OpenElement(i++, "ion-buttons");

        builder.AddAttribute(i++, "collapse", ToAttribute(Collapse));

        builder.AddMultipleAttributes(i++, AdditionalAttributes);

        builder.AddContent(i, ChildContent);

        builder.CloseElement();

        base.BuildRenderTree(builder);
    }
}