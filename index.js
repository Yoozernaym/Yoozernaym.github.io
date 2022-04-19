document.addEventListener('DOMContentLoaded', function() {
    const sidenav = document.querySelectorAll('.sidenav');
    const instancesidenav = M.Sidenav.init(sidenav);
    const dd = document.querySelectorAll('.dropdown-trigger');
    const ddoptions = {alignment: 'right',constrainWidth:false,coverTrigger:false,hover:true};
    const instancedd = M.Dropdown.init(dd, ddoptions);
  });