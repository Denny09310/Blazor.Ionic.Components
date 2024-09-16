using Blazor.Ionic.Components.Services;
using BlazorTransitionableRoute;
using Microsoft.Extensions.DependencyInjection;

namespace Blazor.Ionic.Components.Extensions;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddBlazorIonic(this IServiceCollection services)
    {
        return services.AddScoped<IRouteTransitionInvoker, IonRouteTransitionInvoker>();
    }
}
