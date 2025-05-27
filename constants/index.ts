export const globelBaseUrl = 'https://api.axborotbaza.uz';
// export const localBaseUrl = 'http://127.0.0.1:8000';
export const localBaseUrl = 'http://10.100.104.125:8888';

export const apiPoint = globelBaseUrl+'/api/';
export const filePath = globelBaseUrl+'/storage/';





export const sidebarItems = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: "radix-icons:dashboard"
    },
    {
        name: "Foydalanuvchilar",
        path: "/admin/user",
        icon: "game-icons:progression"
    },
    {
        name: "Katgoriyalar",
        path: "/admin/category",
        icon: "ri:todo-fill"
    },
    {
        name: "Fanlar",
        path: "/admin/subject",
        icon: "game-icons:progression"
    },
    {
        name: "Materiallar",
        path: "/admin/material",
        icon: "eos-icons:product-subscriptions"
        
    },
    {
        name: "To'lov tizimlari",
        path: "/admin/payment",
        icon: "ic:baseline-cloud-done"
    },
    {
        name: "Obunalar",
        path: "/admin/subscription",
        icon: "ic:baseline-cloud-done"
    },
    {
        name: "Obunalar tarixi",
        path: "/admin/history/subscription",
        icon: "ic:baseline-cloud-done"
    },
];