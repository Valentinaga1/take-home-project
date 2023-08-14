import { useRouter } from "next/router";
import DiploAi from '../components/Diplo/Diplo';

const DiploHome = () => {
  const router = useRouter();
    const checkLisItems = ["List Item 1", "List Item 2", "List Item 3"];
    const handleButton1Click = () => {
        console.log('Button 1 clicked!');
        router.push("/diplo-ai/#");
    };

    const handleButton2Click = () => {
        console.log('Button 2 clicked!');
        router.push("/diplo-ai/#");
    };

    return (
      <div>
        <DiploAi 
          title="DiploAI"
          paragraph="DiploAI is a tool that helps companies and governments deal with increasing climate complexity and regulatory change, by using GenAI to identify their optimal strategy to achieve a given goal."
          checkLisItems={checkLisItems}
          button1Text="Action 1"
          button2Text="Action 2"
          onButton1Click={handleButton1Click}
          onButton2Click={handleButton2Click}
        />
      </div>
    );
}

export default DiploHome;