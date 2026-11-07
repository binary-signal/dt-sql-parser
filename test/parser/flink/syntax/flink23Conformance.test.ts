import fs from 'fs';
import path from 'path';
import { FlinkSQL } from 'src/parser/flink';

/**
 * Statements the Apache Flink 2.3 SQL parser accepts, taken from its own parser tests
 * (flink-table/flink-sql-parser/src/test/java/org/apache/flink/sql/parser/, release-2.3,
 * Apache License 2.0). `source` is the test file and line each statement comes from.
 */
const statements: { source: string; sql: string }[] = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'fixtures', 'flink23Conformance.json'), 'utf-8')
);

const flink = new FlinkSQL();

describe('FlinkSQL 2.3 conformance (statements from the Flink parser tests)', () => {
    statements.forEach(({ source, sql }) => {
        it(`${source}: ${sql.replace(/\s+/g, ' ').slice(0, 100)}`, () => {
            expect(flink.validate(sql)).toEqual([]);
        });
    });
});

/** Flink 2.3 data types (https://nightlies.apache.org/flink/flink-docs-release-2.3/docs/dev/table/types/) */
const dataTypes = [
    'CHAR(5)',
    'VARCHAR(10)',
    'STRING',
    'BINARY(3)',
    'VARBINARY(4)',
    'BYTES',
    'DECIMAL(10, 2)',
    'NUMERIC',
    'TINYINT',
    'SMALLINT',
    'INT',
    'BIGINT',
    'FLOAT',
    'DOUBLE',
    'DOUBLE PRECISION',
    'BOOLEAN',
    'DATE',
    'TIME(3)',
    'TIMESTAMP(3)',
    'TIMESTAMP(3) WITHOUT TIME ZONE',
    'TIMESTAMP(3) WITH LOCAL TIME ZONE',
    'TIMESTAMP_LTZ(3)',
    'INTERVAL DAY(2) TO SECOND(3)',
    'INTERVAL YEAR TO MONTH',
    'ARRAY<INT NOT NULL> NOT NULL',
    'INT ARRAY',
    'MULTISET<STRING>',
    'MAP<STRING NOT NULL, ARRAY<INT>>',
    "ROW<a INT 'comment a', b STRING>",
    'ROW(a INT, b STRING)',
    "RAW('java.lang.String', 'snapshot')",
    'VARIANT',
    'BITMAP',
    "STRUCTURED<'com.example.User', name STRING, age INT>",
    'cat.db.MyType',
];

describe('FlinkSQL 2.3 data types', () => {
    dataTypes.forEach((type) => {
        it(type, () => {
            expect(flink.validate(`CREATE TABLE t (c ${type}) WITH ('connector' = 'x')`)).toEqual(
                []
            );
        });
    });
});
