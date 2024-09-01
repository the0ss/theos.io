import { HamburgerMenuIcon, HeartFilledIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Avatar, Button, DropdownMenu, Flex, Link } from "@radix-ui/themes";
import { NavLink } from "react-router-dom";

export default function NavBar({ theme, setTheme }: { theme: number, setTheme: (theme: number) => void }) {
    const links = [
        {
            uri: "/project",
            name: "Project"
        },
        {
            uri: "/blog",
            name: "Blog"
        }
    ]
    return (
        <>
            <header className="header">
                <nav className="nav-bar">
                    <NavLink to="/" >
                        <Avatar radius="full" size="4" src="https://i.pinimg.com/236x/17/e0/95/17e0952640930f13b7be5497f7b63333.jpg" fallback="Y" />
                    </NavLink>
                    <div className="middle-menu">
                        <Flex gap="6" align="center" px="4" >
                            <Flex className="desktop-menu" gap="6">
                                {links.map((link, index) => (
                                    <Link className={theme ? "linkclass" : "linkclass1"} key={index} href={link.uri} color="gray" size={"2"}>
                                        {link.name}
                                    </Link>
                                ))}
                            </Flex>
                            <Button className={theme ? "linkclass" : "linkclass1"} variant="ghost" radius="small" color="gray" size="3">
                                <HeartFilledIcon />
                            </Button>
                            <Button className={theme ? "linkclass" : "linkclass1"} variant="ghost" radius="small" color="gray" size="3">
                                {theme ? <MoonIcon onClick={() => setTheme(0)} /> : <SunIcon onClick={() => setTheme(1)} />}
                            </Button>
                            <Flex className="mobile-menu">
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Button className={theme ? "linkclass" : "linkclass1"} color="gray" variant="ghost" >
                                            <HamburgerMenuIcon />
                                        </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content className="dropdown-menu" sideOffset={10} color="gray" variant="soft">
                                        {links.map((link, index) => (
                                            <DropdownMenu.Item>
                                                <Link
                                                    className={theme ? "linkclass" : "linkclass1"}
                                                    key={index}
                                                    href={link.uri}
                                                    color="gray"
                                                    size={"2"}
                                                >
                                                    {link.name}
                                                </Link>
                                            </DropdownMenu.Item>
                                        ))}
                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>
                            </Flex>
                        </Flex>
                    </div>
                </nav>
            </header>
        </>
    )
}