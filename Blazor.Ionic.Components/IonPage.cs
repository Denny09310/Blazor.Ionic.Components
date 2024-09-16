using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;

namespace Blazor.Ionic.Components;

public partial class IonPage : IonComponentBase
{
    [Parameter]
    public string? Class { get; set; }

    protected override void BuildRenderTree(RenderTreeBuilder builder)
    {
        int i = 0;

        builder.OpenElement(i++, "ion-page");

        builder.AddAttribute(i++, "class", $"ion-page {Class}");

        builder.AddMultipleAttributes(i++, AdditionalAttributes);

        builder.AddContent(i, ChildContent);

        builder.CloseElement();

        base.BuildRenderTree(builder);
    }
}
