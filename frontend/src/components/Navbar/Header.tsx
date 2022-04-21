import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { toggleThemeAtom, toggleSidebarAtom } from "atoms";
import { Link, useMatch, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useRecoilState(toggleThemeAtom);
  const setIsSidebar = useSetRecoilState(toggleSidebarAtom);

  // Active Link
  const donationHistoryMatch = useMatch("/donation-history/*");
  const nftRewardMatch = useMatch("/nft-reward");
  const serviceCenterMatch = useMatch("/service-center");

  return (
    <Nav>
      <Col>
        <Logo onClick={() => navigate(`/main`)}>Solniverse</Logo>
        <List>
          <Element isActive={donationHistoryMatch !== null}>
            <Link to="/donation-history">
              <Text>후원 내역</Text>
            </Link>
          </Element>
          <Element isActive={nftRewardMatch !== null}>
            <Link to="/nft-reward">
              <Text>NFT 리워드</Text>
            </Link>
          </Element>
          <Element isActive={serviceCenterMatch !== null}>
            <Link to="/service-center">
              <Text>고객센터</Text>
            </Link>
          </Element>
        </List>
        <Icons>
          <Profile>
            <BasicImg />
            <Nickname>닉네임</Nickname>
          </Profile>
          <SearchToggle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </SearchToggle>
          <ThemeToggle onClick={() => setIsDark((prev) => !prev)}>
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </ThemeToggle>
          <Logout>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </Logout>
          <SidebarToggle onClick={() => setIsSidebar((prev) => !prev)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </SidebarToggle>
        </Icons>
      </Col>
    </Nav>
  );
}

const Logout = styled.li`
  width: 28px;
  height: 28px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.ownColor};
  }
`;

const SearchToggle = styled.li`
  width: 28px;
  height: 28px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.ownColor};
  }
`;

const SidebarToggle = styled.li`
  width: 28px;
  height: 28px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.ownColor};
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const ThemeToggle = styled.li`
  width: 28px;
  height: 28px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.ownColor};
  }
`;

const Nickname = styled.div`
  font-size: 12px;
  letter-spacing: -0.03em;
  line-height: 1.4;
  font-weight: 700;
`;

const BasicImg = styled.div`
  width: 40px;
  height: 40px;
  background: #e5e8eb;
  border-radius: 50%;
`;

const Profile = styled.div`
  padding: 0 30px;
  min-width: 152px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Text = styled.span`
  &:hover {
    color: ${(props) => props.theme.ownColor};
  }
`;

const Element = styled.li<{ isActive: boolean }>`
  padding: 0 28px;
  line-height: 72px;
  font-weight: 700;
  letter-spacing: -0.5px;

  color: ${(props) =>
    props.isActive ? props.theme.ownColor : props.theme.textColor};
`;

const List = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const Col = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 60px;
  padding: 0 24px;
  max-width: 364px;

  @media screen and (min-width: 767px) {
    max-width: 630px;
    padding: 0;
  }
  @media screen and (min-width: 1024px) {
    height: 72px;
    max-width: 952px;
  }
  @media screen and (min-width: 1439px) {
    max-width: 1296px;
  }
`;

const Nav = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  background: ${(props) => props.theme.bgColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;
