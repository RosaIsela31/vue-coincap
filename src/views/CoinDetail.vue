<template>
  <div class="flex-col">
    <template>
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <div class="flex flex-col items-center">
          <img class="w-20 h-20 mr-5" />
          <h1 class="text-5xl">
            <small class="sm:mr-2 text-gray-500"></small>
          </h1>
        </div>

        <div class="my-10 sm:mt-0 flex flex-col">
          <ul>
            <li class="flex justify-between">
              <b>Ranking</b>
            </li>
          </ul>

          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Cambiar
          </button>

          <div class="flex flex-row my-5">
            <label class="w-full" for="convertValue">
              <input
                id="convertValue"
                type="number"
                class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              />
            </label>
          </div>
        </div>

        <span class="text-xl"></span>
      </div>
    </template>
  </div>
</template>
