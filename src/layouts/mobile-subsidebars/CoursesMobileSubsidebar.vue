<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Courses</h3>
      </div>

      <ul class="submenu" data-simplebar>
        <li>
          <RouterLink to="/courses">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg p"
              data-icon="fluent-mdl2:publish-course"
            />
            Courses
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
