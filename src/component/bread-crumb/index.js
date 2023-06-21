import {getUrl} from "../../utils";
import Frame from "../frame/frame";
import {A} from "../text/a";

function BreadcrumbExample({
    links
                           }) {
    return (
        <Frame>
            {
                links.map((link, index) =>
                    <A
                        key={index}
                        href={getUrl(link)}
                        text={index !== links.length-1 ? link + ' / ' : link}
                    />
                )
            }
        </Frame>
    );
}

export default BreadcrumbExample;