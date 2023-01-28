import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-start flex-1 bg-[#15162c] p-2">
        <Link href="/">
          <span className="sr-only">booking</span>
          {/* @TODO: convert to svg/Image */}
          <img
            className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </Link>
      </div>
    </header>
  );
};
