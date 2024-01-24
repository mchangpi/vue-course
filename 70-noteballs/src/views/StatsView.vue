<template>
  <!-- https://flowbite.com/docs/components/tables/#default-table -->
  <div class="relative overflow-x-auto">
    <table class="w-full text-left text-gray-500">
      <thead class="bg-gray-50 text-base uppercase text-gray-700">
        <tr>
          <th scope="col" class="px-6 py-3">Stat</th>
          <th scope="col" class="px-6 py-3">Value</th>
        </tr>
      </thead>
      <tbody class="text-sm">
        <tr class="border-b bg-white">
          <th
            scope="row"
            class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
          >
            Number of Notes
          </th>
          <td class="px-6 py-4">{{ totalNoteCount }}</td>
        </tr>
        <tr class="border-b bg-white">
          <th
            scope="row"
            class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
          >
            Number of Characters (of all notes)
          </th>
          <td class="px-6 py-4">{{ totalCharCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useNoteStore } from '@/stores/noteStore';

const { totalNoteCount, totalCharCount } = useNoteStore();
</script>
