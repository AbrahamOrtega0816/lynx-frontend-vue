<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Dashboards</h3>
      </div>

      <ul class="submenu" data-simplebar>
        <VCollapseLinks>
          <template #header>
            Personal
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink to="/courses">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg p"
              data-icon="fluent-mdl2:publish-course"
            />
            Courses
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>
