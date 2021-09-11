import React from "react";
import "./../styles/global.css";

function index() {
  return (
    <div class="mx-auto flex flex-col bg-red-100 h-screen text-red-800">
      <header class="container flex-0 mx-auto text-opacity-100">
        <nav class="flex text-center uppercase items-center h-10 font-light">
          <div class="px-3 flex-0">Home</div>
          <div class="px-3 flex-0">about</div>
          <div class="px-3 flex-1 font-bold text-2xl">Shiv DUbey</div>
          <div class="px-3 flex-0">proects</div>
          <div class="px-3 flex-0">contact</div>
        </nav>
      </header>
      <main class="flex-1 flex bg-gradient-to-r from-red-100 to-red-200 ">
        <div class="flex-1 flex items-center justify-center">
          <div class="flex-0">
            <span class="text-5xl font-semibold">HI!!</span> <br />
            <span class="text-4xl">
              I'm <span class="font-semibold uppercase">Shiv Dubey</span>{" "}
            </span>
            <br />
            <span class="text-xl uppercase">
              A passionate full stack developer.
            </span>
          </div>
        </div>
        <div class="flex-1 bg-developer"></div>
      </main>
      <footer class="flex-0"></footer>
    </div>
  );
}

export default index;
