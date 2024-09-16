using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;

namespace Blazor.Ionic.Components;

public partial class IonBackButton : IonComponentBase
{
    [Parameter]
    public string? Color { get; set; }

    [Parameter]
    public string? DefaultHref { get; set; }

    [Parameter]
    public bool? Disabled { get; set; }

    [Parameter]
    public string? Icon { get; set; }

    [Parameter]
    public string? Mode { get; set; }

    [Parameter]
    public string? Text { get; set; }

    [Parameter]
    public string? Type { get; set; }

    protected override void BuildRenderTree(RenderTreeBuilder builder)
    {
        int i = 0;

        builder.OpenElement(i++, "ion-back-button");

        builder.AddAttribute(i++, "color", Color);
        builder.AddAttribute(i++, "default-href", DefaultHref);
        builder.AddAttribute(i++, "disabled", ToAttribute(Disabled));
        builder.AddAttribute(i++, "icon", Icon);
        builder.AddAttribute(i++, "mode", Mode);
        builder.AddAttribute(i++, "text", Text);
        builder.AddAttribute(i++, "type", Type);
        builder.AddAttribute(i++, "onclick", "history.back()");

        builder.AddMultipleAttributes(i++, AdditionalAttributes);

        builder.AddContent(i, ChildContent);

        builder.CloseElement();

        base.BuildRenderTree(builder);
    }
}