
import { Input } from "@repo/ui/input";

export default function Signin() {
    return (
        <div>
            <Input
                  id="username"
                  name="username"
                  type="text"
                  className="pl-10"
                  placeholder="Enter your username"
                  required
                />
        </div>
    )
}