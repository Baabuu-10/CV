
const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">

        <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
            <div className="space-y-5">
                <h1 className="text-2xl font-semibold md:text-4xl">About</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe sed, magni, accusamus totam itaque modi voluptate maxime quam necessitatibus possimus eum fuga inventore in. Quod porro corrupti assumenda deleniti.</p>
            </div>

            <div className="space-y-10">
                <h1 className="text-2xl font-semibold md:text-4xl">Experience</h1>

                <div className="flex flex-col lg:flex-row lg:gap-20">
                <ul>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white">
            <span className="text-lg font-semibold">Junior Web Developer</span>
            <span className="font-light">Company</span>
            <span className="text-gray-400">2023-204</span>
            <p className="text-sm text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi? Suscipit illo nihil odit dicta dolorem maiores hic perspiciatis tempore. Quia cupiditate voluptate beatae est impedit nobis enim totam ipsam!</p>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white">
            <span className="text-lg font-semibold">Junior Web Developer</span>
            <span className="font-light">Company</span>
            <span className="text-gray-400">2023-204</span>
            <p className="text-sm text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi? Suscipit illo nihil odit dicta dolorem maiores hic perspiciatis tempore. Quia cupiditate voluptate beatae est impedit nobis enim totam ipsam!</p>
            </li>
          </ul>

          <ul>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white">
            <span className="text-lg font-semibold">System Desingner</span>
            <span className="font-light">Amozom</span>
            <span className="text-gray-400">2023-204</span>
            <p className="text-sm text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi? Suscipit illo nihil odit dicta dolorem maiores hic perspiciatis tempore. Quia cupiditate voluptate beatae est impedit nobis enim totam ipsam!</p>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white">
            <span className="text-lg font-semibold">Sunior Web Developer</span>
            <span className="font-light">Space X</span>
            <span className="text-gray-400">2023-204</span>
            <p className="text-sm text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi? Suscipit illo nihil odit dicta dolorem maiores hic perspiciatis tempore. Quia cupiditate voluptate beatae est impedit nobis enim totam ipsam!</p>
            </li>
          </ul>
                </div>
            </div>


            <div className="max-w3xl space-y-8">
                <h1 className="text-2xl ont-bold md:text-4xl">Certificates</h1>

                <div className="space-y-0">
                    <div className="text-baseline space-y-3">
                        <h3 className="text-sm font-semibold md:text-lg">Certificates of attendance in Web Dev Tailwind (2024)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas consectetur? Error quisquam quam rem molestias commodi veniam perspiciatis mollitia sit fugit soluta! Non, labore nulla molestiae ipsum deleniti corporis.</p>
                    </div>

                    <div className="text-baseline space-y-3">
                        <h3 className="text-sm font-semibold md:text-lg">Certificates of compliance in Web work  area(2022)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas consectetur? Error quisquam quam rem molestias commodi veniam perspiciatis mollitia sit fugit soluta! Non, labore nulla molestiae ipsum deleniti corporis.</p>
                    </div>

                    <div className="text-baseline space-y-3">
                        <h3 className="text-sm font-semibold md:text-lg">Certificates of attendance of CS50(20222)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas consectetur? Error quisquam quam rem molestias commodi veniam perspiciatis mollitia sit fugit soluta! Non, labore nulla molestiae ipsum deleniti corporis.</p>
                    </div>

                    <div className="text-baseline space-y-3 md:text-lg">
                        <h3 className="text-sm font-semibold ">Certificates of attendance in Mobile Dev (2024)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas consectetur? Error quisquam quam rem molestias commodi veniam perspiciatis mollitia sit fugit soluta! Non, labore nulla molestiae ipsum deleniti corporis.</p>
                    </div>
                </div>
            </div>


            <div className="space-y-10">
                <h1 className="text-2xl font-bold md:text-4xl">References</h1>

                <div className="flex flex-wrap gap-10">
                    <div className="text-baseline space-y-1">
                        <h3 className="text-lg font-light">Mobile Developer</h3> 
                        <h2 className="text-base font-semibold md:text-2xl">Mr, MURIDI MOHA </h2>
                        <p className="text-gray-600 dark:text-gray-400">Phone: 3406852</p>
                        <p>Email: user@gmail.com</p>
                    </div>

                    <div className="text-baseline space-y-1">
                        <h3 className="text-lg font-light">JUNIOR Developer</h3> 
                        <h2 className="text-base font-semibold md:text-2xl">Mr, MUKTAR AHMED </h2>
                        <p className="text-gray-600 dark:text-gray-400">Phone: 3406852</p>
                        <p>Email: user@gmail.com</p>
                    </div>

                    <div className="text-baseline space-y-1">
                        <h3 className="text-lg font-light">Mobile Developer</h3> 
                        <h2 className="text-base font-semibold md:text-2xl">Mr, SAID ABSHIR </h2>
                        <p className="text-gray-600 dark:text-gray-400">Phone: 3406852</p>
                        <p>Email: user@gmail.com</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Home;