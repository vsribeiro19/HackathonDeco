// import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  user: Array<{
    name: string;
    password: string;
  }>;
}

function SignIn({ user }: Props) {
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-22 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-3xl leading-9 tracking-tight text-gray-900 font-sans">
          Sign IN
        </h2>
        <p class="w-full mt-5 font-sans text-center text-xl text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-normal leading-6 font-sans text-gray-800"
            >
              Name
            </label>
            <div class="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required
                class="block w-full border-1 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-normal leading-6 font-sans text-gray-800"
              >
                Password
              </label>
            </div>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full border-1 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center bg-blue-950 px-3 py-2 text-sm leading-6 text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
          <div>
            <button
              type="submit"
              class="flex w-full justify-center border-1 border-stone-950 bg-white  px-3 font-sans py-2 text-sm leading-6 text-black shadow-sm hover:bg-green-900 focus-visible:outline hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up with Google
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-400">
          Already have an account?
          <a
            href="#"
            class="font-semibold leading-6 text-indigo-950 hover:text-indigo-500"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
