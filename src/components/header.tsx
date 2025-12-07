import Link from "next/link";

const menu = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Training", href: "/training" },
  { title: "Calendar", href: "/schedule" },
  { title: "Media", href: "/media" },
  { title: "Shop", href: "/shop" },
];

export function Header() {
  return (
    <div className="absolute inset-x-0 top-4 z-50 flex justify-center">
      <div className="flex h-16 items-center gap-20 px-4 bg-white rounded-full border border-gray-200">
        {/* Mobile Menu */}
        <div className="md:hidden drawer">
          <input
            id="navigation-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <label
              htmlFor="navigation-drawer"
              className="btn btn-sm btn-ghost btn-square drawer-button"
            >
              <span className="iconify lucide--menu size-5" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="navigation-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            />
            <div className="bg-base-100 flex h-screen w-60 flex-col px-3 py-4">
              <p className="text-base-content/60 mx-3 text-sm font-medium">
                Navigation
              </p>
              <ul className="menu mt-1 w-full p-0">
                {menu.map(({ title, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:bg-base-200 rounded-box block px-3 py-1.5 text-sm"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-1 md:flex">
          {menu.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:bg-base-200 rounded-box block px-3 py-1.5 text-xl"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
