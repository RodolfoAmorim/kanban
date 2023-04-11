import { Plus, Lock } from "lucide-react";

export function Tasks() {
  return (
    <div>
      <ul>
        <li>Tasks</li>
        <li>Clients</li>
        <li>Fintech.inc</li>
      </ul>

      <div>
        <div>
          <h1>NFT Project</h1>
          <small>On Progress</small>
        </div>

        <div>
          <div>
            <small>Visibility</small>
            <button>
              <Lock size={16} />
              Private Workspace
            </button>
          </div>

          <div>
            <small>Team</small>
            <span>
              <span>photo</span>
              <span>photo</span>
              <span>photo</span>
              <span>photo</span>
            </span>
            <button>
              <Plus size={16} />
              Add Team
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2>Coluns</h2>
      </div>
    </div>
  );
}
