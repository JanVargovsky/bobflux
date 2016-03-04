import * as s from '../../src/whatNext/state';
import * as f from '../../src/flux';

export class WhatNextStateBuilder {
    private state: s.IWhatNextState = s.default();

    public withSources(...sources: (s.IBobrilSource | BobrilSourceBuilder)[]): WhatNextStateBuilder {
        this.state.sources = sources.map(i => isBobrilSourceBuilder(i) ? i.build() : i);
        return this;
    };

    public build(): s.IWhatNextState {
        return this.state;
    }
    
    public buildToStore(): s.IWhatNextState {
        f.bootstrap({ whatNext: this.state });
        return this.state;
    }
}

export function isWhatNextStateBuilder(obj: s.IWhatNextState | WhatNextStateBuilder): obj is WhatNextStateBuilder {
    return 'build' in obj;
}


export class BobrilSourceBuilder {
    // default state must be set manualy
    private state: s.IBobrilSource = { name: null, description: null, link: null };

    public withName(name: string): BobrilSourceBuilder {
        this.state.name = name;
        return this;
    };

    public withDescription(description: string): BobrilSourceBuilder {
        this.state.description = description;
        return this;
    };

    public withLink(link: string): BobrilSourceBuilder {
        this.state.link = link;
        return this;
    };

    public build(): s.IBobrilSource {
        return this.state;
    }
}

export function isBobrilSourceBuilder(obj: s.IBobrilSource | BobrilSourceBuilder): obj is BobrilSourceBuilder {
    return 'build' in obj;
}
