declare namespace _default {
    let entry: string;
    let mode: string;
    let target: string;
    namespace experiments {
        let outputModule: boolean;
    }
    namespace output {
        let filename: string;
        let path: string;
        namespace library {
            let type: string;
        }
    }
    namespace module {
        let rules: {
            test: RegExp;
            use: string;
            exclude: RegExp;
        }[];
    }
    namespace resolve {
        let extensions: string[];
    }
    namespace optimization {
        namespace splitChunks {
            let chunks: string;
        }
    }
}
export default _default;
//# sourceMappingURL=webpack.config.d.ts.map