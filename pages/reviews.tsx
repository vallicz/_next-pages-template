import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import {Container} from "@/components/container";

const content = {
    title: "Reviews",
    description: "Next.js + NextUI + Tailwind CSS",
}

export default function IndexPage() {
    return (
        <DefaultLayout>
            <Container className={'px-0'}>
                <h1 className={title()}>{content.title}</h1>
                <p>{content.description}</p>
            </Container>
        </DefaultLayout>
    );
}
