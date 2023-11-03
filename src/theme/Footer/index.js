import React from "react";
import Footer from "@theme-original/Footer";

// Dirty workaround for brand colors because the CSS build doesn't work....

export default function FooterWrapper(props) {
  return (
    <>
      <style>
        {`
html[data-theme="dark"] {
  /* General */
  --ifm-background-color: var(--brand-1400);
  --ifm-breadcrumb-color-active: var(--blue);
  --ifm-link-color: var(--blue);
  --ifm-font-color-base: white;

  /* Tables */
  --ifm-table-border-color: var(--brand-1000);
  --ifm-table-stripe-background: var(--brand-1100);

  /* Navbar */
  --ifm-background-surface-color: var(--brand-1100);
  --ifm-navbar-background-color: var(--brand-1100);
  --ifm-navbar-link-color: white;
  --ifm-navbar-link-hover-color: var(--blue2);

	/* Breadcrumbs */
  --ifm-breadcrumb-item-background-active: var(--brand-1100);
	
	/* Sidebar */
  --ifm-toc-border-color: var(--brand-1000);
  --ifm-menu-color-background-active: var(--blue);
  --ifm-menu-color-active: white;
  --ifm-menu-color-background-hover: var(--brand-1100);
}

/* Pagination */
html[data-theme="dark"] .pagination-nav__link {
	border-color: var(--brand-1000);
	background: var(--brand-1100);
}
html[data-theme="dark"] .pagination-nav__link:hover {
	border-color: var(--blue);
}

html[data-theme="dark"] .navbar__items--right {
  color: white;
}
html[data-theme="dark"] .navbar__items--right button:hover {
	background-color: var(--blue);
}

html[data-theme="dark"] .menu__link.menu__link--sublist.menu__link--sublist-caret.menu__link--active {
	color: var(--blue);
}
html[data-theme="dark"] .menu__link--sublist-caret:after {
	background-image: url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.4943 10.4038L7.7174 15.1615L7.16162 14.6057L12.4943 9.29225L17.8078 14.6057L17.252 15.1615L12.4943 10.4038Z' fill='%23160F26'/%3E%3C/svg%3E%0A");
}
html[data-theme="dark"] .menu__list-item-collapsible > a.menu__link--active {
	color: var(--blue) !important;
}

/* Footer */
html[data-theme="dark"] .footer--dark {
	--ifm-footer-background-color: var(--brand-1100);
}

`}
      </style>
      <style>
        {`
html[data-theme="light"] {
  /* General */
  --ifm-background-color: white;
  --ifm-breadcrumb-color-active: var(--blue);
  --ifm-link-color: var(--blue);
  --ifm-font-color-base: var(--brand-1100);

  /* Navbar */
  --ifm-background-surface-color: var(--brand-1100);
  --ifm-navbar-link-color: white;
  --ifm-navbar-link-hover-color: var(--blue2);
  --ifm-dropdown-link-color: white;

	/* Sidebar */
	--ifm-menu-color-active: white;
	--ifm-menu-color-background-active: var(--blue);
  --ifm-menu-color-background-hover: var(--brand-200);
}

/* Mobile nav */
html[data-theme="light"] .navbar-sidebar {
	color: white;
}
html[data-theme="light"] .navbar-sidebar .menu__link {
	color: white;
}
html[data-theme="light"] .navbar__toggle.clean-btn {
	color: white;
}

html[data-theme="light"] .navbar__items--right {
    color: white;
}
html[data-theme="light"] .navbar__items--right button:hover {
	background-color: var(--blue);
}

/* Sidebar */
html[data-theme="light"] .menu__link.menu__link--sublist.menu__link--sublist-caret.menu__link--active {
	background-color: var(--brand-200);
	color: var(--brand-1400);
}
html[data-theme="light"] .menu__link--sublist-caret:after {
	background-image: url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.4943 10.4038L7.7174 15.1615L7.16162 14.6057L12.4943 9.29225L17.8078 14.6057L17.252 15.1615L12.4943 10.4038Z' fill='%23160F26'/%3E%3C/svg%3E%0A");
}
html[data-theme="light"] .menu__list-item-collapsible--active {
	background-color: var(--blue) !important;
}
html[data-theme="light"] .menu__list-item-collapsible > a.menu__link--active {
	color: var(--brand-1400) !important;
}
html[data-theme="light"] .menu__list-item-collapsible--active > a.menu__link--active {
	color: white !important;
}

/* Footer */
html[data-theme="light"] .footer--dark {
	--ifm-footer-background-color: var(--brand-1100);
}

`}
      </style>
      <Footer {...props} />
    </>
  );
}
