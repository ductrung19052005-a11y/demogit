function checkAccess(userRole, isAccountActive) {
  if (!isAccountActive) {
    console.log("Tài khoản bị khóa");
    return;
  }
  switch (userRole) {
    case "ADMIN":
      console.log("Cho phép truy cập toàn bộ");
      break;
    case "MANAGER":
      console.log("Cho phép chỉnh sửa hạn chế");
      break;
    case "EMPLOYEE":
      console.log("Chỉ phép xem");
      break;
    default:
      console.log("Từ chối truy cập");
      break;
  }
}


checkAccess("ADMIN", true);      
checkAccess("MANAGER", true);    
checkAccess("EMPLOYEE", true);    
checkAccess("ADMIN", false);      
checkAccess("GUEST", true);       