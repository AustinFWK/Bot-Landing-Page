import { Button } from "../../components/ui/button";

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <h2>Never miss a Valorant Patch again!</h2>
        <span>
          Get instant, clean, easy-to-read patch notes delivered straight to
          your Discord server. <br />
        </span>
        <Button>Invite to server</Button>
      </div>
    </section>
  );
}
