<template>
  <div class="border-b border-[#354651] w-full flex justify-center">
    <div class="navbar bg-base-100 max-w-[1280px]">
      <div class="flex-1">
        <a class="text-white normal-case text-xl font-bold"
          ><span class="text-secondary">GitHub </span>Repos</a
        >
      </div>
      <div class="flex-none gap-2">
        <div class="form-control hidden md:block">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered border-secondary"
          />
        </div>
        <div class="dropdown dropdown-end">
          <label tabIndex="{0}" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="../assets/avatar.png" />
            </div>
          </label>
          <!-- <ul tabIndex={0}
                    class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>