export function LoadingState() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 py-24">
      <div className="flex gap-1.5">
        <span className="h-8 w-1.5 animate-pulse rounded-full bg-primary/40 [animation-delay:-0.3s]" />
        <span className="h-8 w-1.5 animate-pulse rounded-full bg-primary/60 [animation-delay:-0.15s]" />
        <span className="h-8 w-1.5 animate-pulse rounded-full bg-primary" />
        <span className="h-8 w-1.5 animate-pulse rounded-full bg-primary/60 [animation-delay:0.15s]" />
        <span className="h-8 w-1.5 animate-pulse rounded-full bg-primary/40 [animation-delay:0.3s]" />
      </div>

      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        Loading document...
      </p>
    </div>
  );
}
