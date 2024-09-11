namespace Blazor.Ionic.Components.Events;

public interface IScrollDetail : IGestureDetail, IScrollBaseDetail
{
    double ScrollLeft { get; set; }
    double ScrollTop { get; set; }
}
