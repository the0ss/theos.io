import { HeartFilledIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Avatar, Button, Container, Flex } from "@radix-ui/themes";
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
            <Container size="3" style={{ borderRadius: 'var(--radius-3)', top: 0, zIndex: 50 }} position="sticky">
                <Flex direction="row" justify="between" align="center" px="4">
                    <NavLink to="/" >
                        <Avatar radius="full" size="4" src="https://i.pinimg.com/236x/17/e0/95/17e0952640930f13b7be5497f7b63333.jpg" fallback="Y" />
                    </NavLink>
                    <div >
                        <Flex gap="6" align="center" px="4">
                            {links.map((link,index) => (
                                <NavLink key={index} to={link.uri} >
                                    <Button size="3" variant="ghost" color="gray" radius="full" highContrast>
                                        {link.name}
                                    </Button>
                                </NavLink>
                            ))}
                            <Button variant="ghost" radius="full" color="gray" size="3">
                                <HeartFilledIcon />
                            </Button>
                            <Button variant="ghost" radius="full" color="gray" size="3">
                                {theme ? <MoonIcon onClick={() => setTheme(0)} /> : <SunIcon onClick={() => setTheme(1)} />}
                            </Button>
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </>
    )
}