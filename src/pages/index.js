const index = () => /*html*/ `
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <img src="https://pbs.twimg.com/profile_images/1347266352948633601/8Df7HJZZ_400x400.jpg" alt="photo de profil" class="rounded-full"/>
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Anthony Gorski</h2>
              <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p class="text-base">
        👨‍💻 : Développeur Full Stack JavaScript <br />
        💅 : Front-end : HTML, CSS, JavaScript, React.js, TailwindCSS.<br />
        ⚙️ : Back-end : Node.js, Firebase, MongoDB, Express.js.<br />
        </p>
            </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p class="leading-relaxed text-lg mb-4">Voilà le projet de Janvier qui arrive en retard, j'ai voulu créer une applicatioN qui permet de générer des sites statiques.
        </p>
        <p class="font-bold">Comment ça marche ?</p>
        <p>Il faut fork le projet, puis dans <code>./src/pages</code> faire une fonction de ce type</p>

        <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=base16-light&wt=none&l=auto&ds=true&dsyoff=9px&dsblur=26px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520.src%252Fpages%252Findex.js%250A%250Aconst%2520index%2520%253D%2520%28%29%2520%253D%253E%2520%252F*html*%252F%2520%2560%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520lorem%2520ipsum%2520dolor%2520%250A%2520%2520%2520%2520%253C%252Fdiv%253E%2560%250A%257D%250A%250Amodule.exports%2520%253D%2520index%28%29%253B"
        style="width: 291px; height: 236px; border:0; transform: scale(1); overflow:hidden;"
        sandbox="allow-scripts allow-same-origin">
        </iframe>

        <div>N'hésitez pas à voir le projet et me faire des retours</div>
            <a class="text-indigo-500 inline-flex items-center" href="https://github.com/GorskiAnthony/generateurStaticWebSite">Lien du projet
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

module.exports = index();
