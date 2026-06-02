export default function Footer() {
  return (
    <footer className="bg-black border-t border-border px-8 md:px-12 py-6">
      <div className="flex items-center justify-between">
        <span className="font-condensed text-[10px] tracking-label text-text-muted uppercase">
          © {new Date().getFullYear()} Andrew Huang
        </span>
        <span className="font-condensed text-[10px] tracking-label text-text-muted uppercase">
          Los Angeles, California
        </span>
      </div>
    </footer>
  )
}
