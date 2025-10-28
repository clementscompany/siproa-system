export default function homepage(){
    return`
    <body class="bg-[#f4f4f4]">
<div class="flex h-screen bg-gray-100">
<!-- SideNavBar -->
<div class="hidden md:flex flex-col w-64 bg-white shadow-lg">
<div class="flex items-center justify-center h-20 shadow-md bg-[#003366] text-white">
<span class="material-symbols-outlined text-3xl mr-2">shield</span>
<h1 class="text-xl font-bold">Gestão Aduaneira</h1>
</div>
<div class="flex flex-col flex-1 p-4">
<div class="flex flex-col gap-2">
<a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf3]" href="#">
<span class="material-symbols-outlined text-[#003366]">dashboard</span>
<p class="text-[#003366] text-sm font-medium">Dashboard</p>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200" href="#">
<span class="material-symbols-outlined text-gray-700">folder_copy</span>
<p class="text-gray-700 text-sm font-medium">Declarações Aduaneiras</p>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200" href="#">
<span class="material-symbols-outlined text-gray-700">payment</span>
<p class="text-gray-700 text-sm font-medium">Pagamentos</p>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200" href="#">
<span class="material-symbols-outlined text-gray-700">bar_chart</span>
<p class="text-gray-700 text-sm font-medium">Relatórios</p>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200" href="#">
<span class="material-symbols-outlined text-gray-700">settings</span>
<p class="text-gray-700 text-sm font-medium">Configurações</p>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-200" href="#">
<span class="material-symbols-outlined text-gray-700">group</span>
<p class="text-gray-700 text-sm font-medium">Gestão de Usuários</p>
</a>
</div>
<div class="mt-auto flex items-center gap-3 p-3 border-t border-gray-200">
<img class="w-10 h-10 rounded-full" data-alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRShutfuLa4BEP0oKgx2-208fEmULCC2O60eQm-bw_2GLR_HNS_hZ3XSzCEZYN38BhL2VEMzv95Kn1_fmcNjBlxMmKMRBeT_QPsWuClWyKJi59ee7oL2yOAHXj4VzCQXcXB2R826P1iMCFDNp9gcJLgSunmh_1bteluoXfCh8-eu3U7k5lg-WBvJzLaA-6FggqL5t0d7FvzzEBEqWstLCJWEDTLcsCk3m6StZ1wkWEFLzzhWBdnftnSwyJMlOTG86qIxJJK_FyAlk"/>
<div>
<p class="text-sm font-medium text-gray-800">Nome do Usuário</p>
<p class="text-xs text-gray-500">Administrador</p>
</div>
</div>
</div>
</div>
<!-- Main Content -->
<div class="flex flex-col flex-1 overflow-y-auto">
<!-- TopNavBar -->
<header class="flex items-center justify-between h-20 px-6 bg-white border-b border-gray-200 shadow-sm">
<div class="flex items-center">
<button class="md:hidden mr-4">
<span class="material-symbols-outlined text-gray-600">menu</span>
</button>
<h2 class="text-2xl font-bold text-[#003366]">Dashboard</h2>
</div>
<div class="flex items-center gap-4">
<button class="relative">
<span class="material-symbols-outlined text-gray-600">notifications</span>
<span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
</button>
<div class="relative">
<button class="flex items-center gap-2">
<span class="material-symbols-outlined text-gray-600">language</span>
<span class="text-sm text-gray-700">Português</span>
<span class="material-symbols-outlined text-gray-600">arrow_drop_down</span>
</button>
</div>
<button class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#003366] rounded-lg hover:bg-[#002244]">
<span>Sair</span>
<span class="material-symbols-outlined">logout</span>
</button>
</div>
</header>
<main class="p-6">
<!-- KPI Cards -->
<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
<div class="flex items-center p-4 bg-white border rounded-lg shadow-sm">
<div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full">
<span class="material-symbols-outlined">pending_actions</span>
</div>
<div>
<p class="text-sm font-medium text-gray-500">Declarações pendentes</p>
<p class="text-2xl font-semibold text-gray-800">15</p>
</div>
</div>
<div class="flex items-center p-4 bg-white border rounded-lg shadow-sm">
<div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
<span class="material-symbols-outlined">hourglass_top</span>
</div>
<div>
<p class="text-sm font-medium text-gray-500">Pagamentos pendentes</p>
<p class="text-2xl font-semibold text-gray-800">7</p>
</div>
</div>
<div class="flex items-center p-4 bg-white border rounded-lg shadow-sm">
<div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
<span class="material-symbols-outlined">task_alt</span>
</div>
<div>
<p class="text-sm font-medium text-gray-500">Declarações processadas</p>
<p class="text-2xl font-semibold text-gray-800">250</p>
</div>
</div>
<div class="flex items-center p-4 bg-white border rounded-lg shadow-sm">
<div class="p-3 mr-4 text-red-500 bg-red-100 rounded-full">
<span class="material-symbols-outlined">notification_important</span>
</div>
<div>
<p class="text-sm font-medium text-gray-500">Alertas</p>
<p class="text-2xl font-semibold text-[#dc3545]">3</p>
</div>
</div>
</div>
<!-- Charts -->
<div class="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3">
<div class="p-4 bg-white border rounded-lg shadow-sm lg:col-span-2">
<h3 class="text-lg font-semibold text-[#003366]">Volume de Importação/Exportação</h3>
<img class="w-full h-auto mt-4" data-alt="Bar chart showing import and export volume over several months" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0BROdBm-9y5sAOAp08GOzphaWj0Ex_YCY9hk8JwP9C-HXtBSZjhhxswxU7rAVcZMdsoiWKQ1GXFe9a0Od8hG6l_aenDZMBcQVNO_fJCPSpOUliu1hyB29VvYJ47c4ODKB3hR-aqNjrN8o4nYmnt-V-f2rIFd8keTUy_6rwwwC_ECQ0bhpZqQaon3kPorscQfrMgiJRmMmNZhkUx68_9JID7-GjLL4SPdiUGJxWyKoSM5dXdPlIDd14ooxUu6fNpWzrF5ekBh-Phg"/>
</div>
<div class="p-4 bg-white border rounded-lg shadow-sm">
<h3 class="text-lg font-semibold text-[#003366]">Distribuição de Mercadorias</h3>
<img class="w-full h-auto mt-4" data-alt="Pie chart showing the distribution of different types of goods" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Ou0a6heVda-uthuYNxvvE-IVO5Im8hlApOsTjaITa5M72QdTWZ_uKWu7TIvMpd7fOcClGv9TDaT-fHvMUS4FnojkuTEh2En4bDYVBQfTrhSPPxz6ksewyeFtGBJAdxoCnuV0J00w3f2TjTmr_X_aLJJab1dWtpqRSsyFSQOlRnpKCRm8dYXQS3JgXZYtWw5JY2Bv3coUjH2dAxCvBGO3rLUncUKrs4evc-rTvjqPuGI2ab_QOz6vPwGbPCk4iWS_RqUA51D8Vns"/>
</div>
<div class="p-4 bg-white border rounded-lg shadow-sm lg:col-span-3">
<h3 class="text-lg font-semibold text-[#003366]">Evolução Temporal de Transações</h3>
<img class="w-full h-auto mt-4" data-alt="Line chart showing the evolution of transactions over time" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBygM4hONM0TLUFk2c_1udYZnf1Fyn4T_kt-IoIngnDk3iBeuhQuXZGuQb4FeUKKKl28CGPz1EU7Ryr3hqyEO-YJ31s6DlBHh3oLKBRU-wMnHQe3wV4iXh4_hHJzNQjo9QBQ5PrIfS9wH7N_xGEx5Xm5M5L3kEfmVlNtW4MDxeqNKy9Tr_eajMoeEumzl2s6_bSeIn9JrkkN-_IGIm0_iqXVCSUvVkDxTPaZghYm9gR_DNLGBq6vK8zUpuNpLpyZLWu-0sZph-aing"/>
</div>
</div>
<!-- Detailed Table -->
<div class="mt-6 bg-white border rounded-lg shadow-sm">
<div class="flex items-center justify-between p-4 border-b">
<h3 class="text-lg font-semibold text-[#003366]">Declarações Recentes</h3>
<div class="flex gap-2">
<button class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-[#28a745] rounded-lg hover:bg-green-700">
<span class="material-symbols-outlined text-sm">add</span>
<span>Adicionar</span>
</button>
<button class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
<span class="material-symbols-outlined text-sm">upload_file</span>
<span>Exportar</span>
</button>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-sm text-left text-gray-500">
<thead class="text-xs text-gray-700 uppercase bg-gray-50">
<tr>
<th class="px-6 py-3" scope="col">ID da declaração</th>
<th class="px-6 py-3" scope="col">Data</th>
<th class="px-6 py-3" scope="col">Status</th>
<th class="px-6 py-3" scope="col">Tipo de mercadoria</th>
<th class="px-6 py-3" scope="col">Impostos aplicáveis</th>
<th class="px-6 py-3" scope="col">Ações</th>
</tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 font-medium text-gray-900">#12345</td>
<td class="px-6 py-4">2024-05-20</td>
<td class="px-6 py-4">
<span class="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">Processado</span>
</td>
<td class="px-6 py-4">Eletrônicos</td>
<td class="px-6 py-4">AKZ 50.000</td>
<td class="px-6 py-4 flex gap-2">
<button class="text-blue-600 hover:text-blue-900"><span class="material-symbols-outlined text-base">edit</span></button>
<button class="text-red-600 hover:text-red-900"><span class="material-symbols-outlined text-base">delete</span></button>
</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-gray-100">
<td class="px-6 py-4 font-medium text-gray-900">#12346</td>
<td class="px-6 py-4">2024-05-19</td>
<td class="px-6 py-4">
<span class="px-2 py-1 text-xs font-medium text-orange-800 bg-orange-100 rounded-full">Pendente</span>
</td>
<td class="px-6 py-4">Têxteis</td>
<td class="px-6 py-4">AKZ 15.000</td>
<td class="px-6 py-4 flex gap-2">
<button class="text-blue-600 hover:text-blue-900"><span class="material-symbols-outlined text-base">edit</span></button>
<button class="text-red-600 hover:text-red-900"><span class="material-symbols-outlined text-base">delete</span></button>
</td>
</tr>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 font-medium text-gray-900">#12347</td>
<td class="px-6 py-4">2024-05-18</td>
<td class="px-6 py-4">
<span class="px-2 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full">Rejeitado</span>
</td>
<td class="px-6 py-4">Alimentos</td>
<td class="px-6 py-4">AKZ 22.000</td>
<td class="px-6 py-4 flex gap-2">
<button class="text-blue-600 hover:text-blue-900"><span class="material-symbols-outlined text-base">edit</span></button>
<button class="text-red-600 hover:text-red-900"><span class="material-symbols-outlined text-base">delete</span></button>
</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-gray-100">
<td class="px-6 py-4 font-medium text-gray-900">#12348</td>
<td class="px-6 py-4">2024-05-17</td>
<td class="px-6 py-4">
<span class="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">Processado</span>
</td>
<td class="px-6 py-4">Automóveis</td>
<td class="px-6 py-4">AKZ 1.200.000</td>
<td class="px-6 py-4 flex gap-2">
<button class="text-blue-600 hover:text-blue-900"><span class="material-symbols-outlined text-base">edit</span></button>
<button class="text-red-600 hover:text-red-900"><span class="material-symbols-outlined text-base">delete</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>
</div>
</body>
    `;
}