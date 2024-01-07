<template>
    <div id="app">
      <header>
        <Navbar />
      </header>
    </div>
   </template>
   
   <script>
   import Navbar from './NavBar.vue'
   export default {
     name: 'app',
     components: {
       Navbar
     }
   }
   </script>
   
   <style>
     * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
     }
     body {
       font-family: 'Avenir', Helvetica, Arial, sans-serif;
     }
     header {
       background: dimgrey;
       width: auto;
       height: 80px;
       margin-top: -450px;
       margin-left: -20%;
     }
   </style>
   