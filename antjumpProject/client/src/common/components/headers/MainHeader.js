import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoButton from "../items/LogoButton";
import { useSelector, useDispatch } from "react-redux";
import { decodeJwt } from "../../../utils/tokenUtils";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { callLogoutAPI, callGetMemberAPI } from "../../../apis/MemberAPICalls";
import Link from "@mui/material/Link";
import { useEffect } from "react";

const pages = ["요금제", "FAQ", "문의"];
const settings = ["내 정보", "상품", "프로젝트", "로그아웃"];
const introduces = ["메신저", "일정 관리", "프로젝트"];

const MainHeader = () => {
  const navigate = useNavigate();

  const token = decodeJwt(window.localStorage.getItem("accessToken"));
  const dispatch = useDispatch();
  const loginMember = useSelector((state) => state.memberReducer); // 저장소에서 가져온 loginMember 정보
  const isLogin = window.localStorage.getItem("accessToken"); // Local Storage 에 token 정보 확인

  const onClickLogoutHandler = () => {
    window.localStorage.removeItem("accessToken");
    //로그아웃
    dispatch(callLogoutAPI());

    alert("로그아웃이 되어 메인화면으로 이동합니다.");
    navigate("/", { replace: true });
    window.location.reload();
  };

  function BeforeLogin() {
    return (
      <div>
        <Link
          component={RouterLink}
          to="/members/login"
          underline="hover"
          color="white"
        >
          로그인 &nbsp;
        </Link>
        |
        <Link
          component={RouterLink}
          to="/members/register"
          underline="hover"
          color="white"
        >
          &nbsp; 회원가입
        </Link>
      </div>
    );
  }

  function AfterLogin() {
    
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="설정 열기">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <Button component={RouterLink} to="/members/profile">
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{settings[0]}</Typography>
            </MenuItem>
          </Button>
          <p />
          <Button component={RouterLink} to="/payments">
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{settings[1]}</Typography>
            </MenuItem>
          </Button>
          <p />
          <Button component={RouterLink} to="/projects">
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{settings[2]}</Typography>
            </MenuItem>
          </Button>
          <p />
          <Button onClick={onClickLogoutHandler}>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{settings[3]}</Typography>
            </MenuItem>
          </Button>
        </Menu>
      </Box>
    );
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElIntroduce, setAnchorElIntroduce] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenintroduceMenu = (event) => {
    setAnchorElIntroduce(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleCloseIntroduceMenu = () => {
    setAnchorElIntroduce(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ my: 2, color: "white", display: "block", backgroundColor: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoButton />
          <Button component={RouterLink} to="/">
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: "white",
              }}
            >
              로고
            </Typography>
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="소개 열기">
                  <IconButton onClick={handleOpenintroduceMenu} sx={{ p: 0 }}>
                    <Typography
                      variant="h6"
                      noWrap
                      sx={{
                        ml: 2,
                        display: { xs: "flex", md: "none" },
                        flexGrow: 1,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        textDecoration: "none",
                      }}
                    >
                      소개
                    </Typography>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElIntroduce}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElIntroduce)}
                  onClose={handleCloseIntroduceMenu}
                >
                  <Button component={RouterLink} to="/intro/messenger">
                    <MenuItem onClick={handleCloseIntroduceMenu}>
                      <Typography textAlign="center">
                        {introduces[0]}
                      </Typography>
                    </MenuItem>
                  </Button>
                  <p />
                  <Button component={RouterLink} to="/intro/schedule">
                    <MenuItem onClick={handleCloseIntroduceMenu}>
                      <Typography textAlign="center">
                        {introduces[1]}
                      </Typography>
                    </MenuItem>
                  </Button>
                  <p />
                  <Button component={RouterLink} to="/intro/cooperation">
                    <MenuItem onClick={handleCloseIntroduceMenu}>
                      <Typography textAlign="center">
                        {introduces[2]}
                      </Typography>
                    </MenuItem>
                  </Button>
                </Menu>
              </Box>

              <p />
              <Button component={RouterLink} to="/intro/charge">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{pages[0]}</Typography>
                </MenuItem>
              </Button>
              <p />
              <Button component={RouterLink} to="/faqs">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{pages[1]}</Typography>
                </MenuItem>
              </Button>
              <p />
              <Button component={RouterLink} to="/qnas">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{pages[2]}</Typography>
                </MenuItem>
              </Button>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="설정 열기">
                <IconButton onClick={handleOpenintroduceMenu} sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      ml: 2,
                      mt: 2,
                      flexGrow: 1,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    소개
                  </Typography>
                </IconButton>
              </Tooltip>
            </Box>

            <Button
              component={RouterLink}
              to="/intro/charge"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[0]}
            </Button>
            <Button
              component={RouterLink}
              to="/faqs"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[1]}
            </Button>
            <Button
              component={RouterLink}
              to="/qnas"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {pages[2]}
            </Button>
          </Box>
          {isLogin == null || isLogin === undefined ? (
            <BeforeLogin />
          ) : (
            <AfterLogin />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainHeader;
