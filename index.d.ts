// Copyright (c) 2016
//     _____        __ _   ____  _           _
//    / ____|      / _| | |  _ \(_)         | |
//   | (___   ___ | |_| |_| |_) |_ _ __   __| |
//    \___ \ / _ \|  _| __|  _ <| | '_ \ / _` |
//    ____) | (_) | | | |_| |_) | | | | | (_| |
//   |_____/ \___/|_|  \__|____/|_|_| |_|\__,_|
//
//                                soft-bind.com
//
// Licensed under MIT.

declare module 'pretty-error' {

    namespace PrettyError {
        function start();
        function stop();

        class ParsedError {
            constructor( error:Error );
        }

        interface ConfigObject {
            skipPackages?:boolean | string[],
            skipPaths?:boolean | string[],
            skip?:boolean | PrettyError.Callback | PrettyError.Callback[],
            maxItems?:number,
            skipNodeFiles?:boolean | any                                                    // assuming this is optional
            filters?:boolean | PrettyError.Callback | PrettyError.Callback[],
            parsedErrorFilters?:boolean | PrettyError.Callback | PrettyError.Callback[],
            aliases?:boolean | Object
        }

        interface Callback {
            traceLine:Object | any,
            lineNumber:number
        }
    }

    class PrettyError {
        constructor();

        start():PrettyError;
        stop():any;
        config( configObject:PrettyError.ConfigObject ):PrettyError;
        withoutColors():PrettyError;
        withColors():PrettyError;
        skipPackage( ... packages:string[] ):PrettyError;
        unskipPackage( ... packages:string[] ):PrettyError;
        unskipAllPackages():PrettyError;
        skipPath( ... paths:string[] ):PrettyError;
        unskipPath( ... paths:string[] ):PrettyError;
        unskipAllPaths():PrettyError;
        skip( callbacks:PrettyError.Callback ):PrettyError;
        unskip( callbacks:PrettyError.Callback ):PrettyError;
        unskipAll():PrettyError;
        skipNodeFiles():any;
        unskipNodeFiles():any;
        filter( callbacks:PrettyError.Callback ):PrettyError;
        removeFilter( callbacks:PrettyError.Callback ):PrettyError;
        removeAllFilters():PrettyError;
        filterParsedError( callbacks:PrettyError.Callback ):PrettyError;
        removeParsedErrorFilter( callbacks:PrettyError.Callback ):PrettyError;
        removeAllParsedErrorFilters():PrettyError;
        setMaxItems( maxItems:number ):PrettyError;
        alias( stringOrRx:string, alias:string ):PrettyError;
        removeAlias( stringOrRx:string ):PrettyError;
        removeAllAliases():PrettyError;
        appendStyle( toAppend:Object ):PrettyError;
        render( e:PrettyError.ParsedError, logIt?:boolean, useColors?:boolean ):string;
        getObject( e:Object ):Object;
    }

    export = PrettyError;

}
