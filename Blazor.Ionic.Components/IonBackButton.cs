using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;

namespace Blazor.Ionic.Components;

public partial class IonBackButton : IonComponentBase
{
    [Parameter]
    public string? DefaultHref { get; set; }

    protected override void BuildRenderTree(RenderTreeBuilder builder)
    {
        int i = 0;

        builder.OpenElement(i++, "ion-back-button");

        builder.AddAttribute(i++, "default-href", DefaultHref);
        builder.AddAttribute(i++, "onclick", "history.back()");

        builder.AddMultipleAttributes(i++, AdditionalAttributes);

        builder.AddContent(i, ChildContent);

        builder.CloseElement();

        base.BuildRenderTree(builder);
    }
}
