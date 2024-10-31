import { BiCurrentLocation, BiSun, BiMoon, BiEnvelope, BiPhone, BiLogoGithub, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src="/baabuu.jpg" alt="" className="w-20 rounded-full" />

          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              Muridi <span className="font-semibold">Turab</span>
            </h1>
            <h3 className="text-xl font-light">Web Developer</h3>
          </div>

          <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
            {darkMode ? <BiSun className="text-2xl" /> : <BiMoon className="text-2xl" />}
          </button>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className="space-y-3">
            <li className="flex items-center gap-5">
              <BiCurrentLocation className="text-xl" />
              <span>Kaafi St, 256 Fc Barxada</span>
            </li>

            <li className="flex items-center gap-5">
              <BiEnvelope className="text-xl" />
              <span>user@gmail.com</span>
            </li>

            <li className="flex items-center gap-5">
              <BiPhone className="text-xl" />
              <span>3406852</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiLogoGithub className="text-xl" />
              <span>@githubuser</span>
            </li>

            <li className="flex items-center gap-5">
              <BiLogoTwitter className="text-xl" />
              <span>@twitteruser</span>
            </li>

            <li className="flex items-center gap-5">
              <BiLogoLinkedin className="text-xl" />
              <span>@linkedinuser</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>

          <ul>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white">
              <span className="font-semibold md:text-lg">Computer Science</span>
              <span className="font-light">Jamhuriya University</span>
              <span className="text-sm text-gray-400">2021-2025</span>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white">
              <span className="font-semibold md:text-lg">Software Developer</span>
              <span className="font-light">Jamhuriya University</span>
              <span className="text-sm text-gray-400">2025-2027</span>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white">
              <span className="font-semibold md:text-lg">ICT Company</span>
              <span className="font-light">Jamhuriya University</span>
              <span className="text-sm text-gray-400">2023 ongoing</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">HTML</span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">CSS</span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">JavaScript</span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">React</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">Next.js</span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">PostgreSQL</span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">MongoDB</span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">Prisma</span>
          </div>
        </div>


        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-bae font-semibold md:text-2xl">HOBBIES</h1>
          <div className="flex felx-wrap gap-16 p-3">

            <ul className="flex list-disc flex-col gap-3">
              <li>Skiing</li>
              <li>Reading Books</li>
              <li>WorkOut</li>
            </ul>

            <ul className="flex list-disc flex-col gap-3">
              <li>Football</li>
              <li>Efootball</li>
              <li>Walking</li>
            </ul>

          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
        <h1 className="text-bae font-semibold md:text-2xl">LANGUAGES</h1>

        <ul className="flex list-disc flex-wrap gap-3 mdd:text-lg">
          <li>English</li>
          <li>Chaina</li>
          <li>Arabic</li>
        </ul>
        </div>

      </div>
    </div>
  );
};

export default HeaderLeft;
