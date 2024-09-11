using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace Blazor.Ionic;

public abstract class IonComponentBase : ComponentBase
{
    protected ElementReference Element { get; set; }

    protected static string? ToAttribute<T>(T value)
    {
        if (ReferenceEquals(value, default(T))) return null;
        return value!.ToString()!.ToLower();
    }

    protected async Task AddEventListenerAsync<T>(EventCallback<T> callback, string eventName, Func<T, ValueTask> handler)
    {
        if (callback.HasDelegate)
        {
            await Element.AddEventListenerAsync(eventName, handler);
        }
    }

    protected async Task RemoveEventListenerAsync<T>(EventCallback<T> callback, string eventName, Func<T, ValueTask> handler)
    {
        if (callback.HasDelegate)
        {
            await Element.RemoveEventListenerAsync(eventName, handler);
        }
    }
}