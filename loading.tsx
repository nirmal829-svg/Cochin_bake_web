export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center"
      style={{ backgroundColor: "var(--color-canvas)" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "var(--radius-full)",
            border: "2px solid var(--color-hairline)",
            borderTopColor: "var(--color-ink)",
            animation: "spin 800ms linear infinite",
          }}
        />
        <p
          style={{
            fontSize: 14,
            color: "var(--color-body-muted)",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
          }}
        >
          Loading spices…
        </p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}