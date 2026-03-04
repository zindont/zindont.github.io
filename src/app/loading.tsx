export default function Loading() {
  return (
    <div className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-10 print:p-11">
      <div className="resume-surface mx-auto w-full max-w-3xl space-y-8 print:space-y-4">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1 space-y-3">
            <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-72 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />
          </div>
          <div className="size-24 animate-pulse rounded-xl bg-gray-200 md:size-28" />
        </div>

        <div className="space-y-8">
          {[...Array(4)].map((_, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: Static skeleton content doesn't reorder
              key={`loading-section-${i}`}
              className="space-y-4"
            >
              <div className="h-6 w-36 animate-pulse rounded bg-gray-200" />
              <div className="space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
