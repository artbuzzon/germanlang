<template>
    <div :class="`${$options.name}`">
        <router-link
                :to="{ name: icon.name }"
                v-for="icon in menuItemsData"
                :key="icon.title"
        >
            <LeftMenuItem :title="icon.title" :icon="icon.icon"/>
        </router-link>
    </div>
</template>

<script>
import LeftMenuItem from '@/components/LeftMenu/LeftMenuItem.vue';

import DashboardIcon from '@/assets/icons/dashboard.svg';
import GroupsIcon from '@/assets/icons/groups.svg';
import TimetableIcon from '@/assets/icons/timetable.svg';
import CoursePlansIcon from '@/assets/icons/course-plans.svg';
import UsersIcon from '@/assets/icons/users.svg';
import RolesIcon from '@/assets/icons/roles.svg';

export default {
    name: 'TheLeftMenu',
    data() {
        return {
            menuItemsData: [
                {title: 'Dashboard', name: 'dashboard', icon: DashboardIcon},
                {title: 'Groups', name: 'groups', icon: GroupsIcon},
                {title: 'Timetable', name: 'timetable', icon: TimetableIcon},
                {title: 'Course Plans', name: 'course-plans', icon: CoursePlansIcon},
                {title: 'Users', name: 'users', icon: UsersIcon},
                {title: 'Roles', name: 'roles', icon: RolesIcon},
            ],
        };
    },
    components: {
        LeftMenuItem,
    },
};
</script>

<style lang="scss" scoped>
.TheLeftMenu {
    padding-top: 4rem;
    padding-left: 4rem;
    display: inline-block;
    z-index: 3;
    box-shadow: 0.3rem 0.4rem 1rem rgba(0, 0, 0, 0.1);
}
</style>