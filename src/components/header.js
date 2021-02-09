const header = () => /*html*/ `

<header class=" bg-white text-gray-900">
    
  <nav
    class="flex flex-col items-center justify-between mx-auto p-8 md:flex-row lg:w-5/6 xl:3/4"
  >
    <!-- SECTION : Logo -->
      <div
        class="mr-4 flex items-center justify-center rounded-full w-8 h-8 sm:w-12 sm:h-12 border-4 bg-blue-500  border-blue-500 "
      >
        coucou
      </div>
      <!-- !SECTION : Logo -->
    <ul class="flex items-center justify-between uppercase">
      <a href="#" class="mx-2 sm:mx-4 lg:mx-6">About</a>
      <a href="#" class="mx-2 sm:mx-4 lg:mx-6">Pricing</a>
      <a href="#" class="mx-2 sm:mx-4 lg:mx-6">Contact</a>
    </ul>

    <!-- SECTION : Login Btn -->
    <button
      class="rounded-sm px-4 py-2 uppercase bg-blue-500  text-white  focus:outline-none"
    >
      Login
    </button>
    <!-- !SECTION : Login Btn -->
  </nav>

      
</header>`;

module.exports = header;
