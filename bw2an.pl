use utf8;
use strict;
use warnings;
binmode STDIN, ':utf8';
binmode STDOUT, ':utf8';

print qq{<?xml version="1.0" encoding="utf-8"?>\n};
print qq{<akomaNtoso>\n};
print qq{    <debate>\n};
print qq{        <meta>\n};
print qq{            <references>\n};
print qq{                <TLCPerson href="/ontology/person/::/唐鳳" id="唐鳳" showAs="唐鳳"/>\n};
print qq{            </references>\n};
print qq{        </meta>\n};
print qq{        <debateBody>\n};
print qq{            <debateSection>\n};

my $line = <STDIN>;
chomp $line;
my $heading = substr($line, 2);
print qq{                <heading>\n};
print qq{                    $heading\n};
print qq{                </heading>\n};

1 until <STDIN> =~ /(Audrey Tang|唐鳳)[:：]/;

print qq{                <speech by="#$1">\n};

local $/ = "\n\n";
while (my $para = <STDIN>) {
    $para =~ s/^\s+//;
    $para =~ s/\s+$//;
    if ($para =~ s/^>//) {
        $para =~ s/^\s+//;
        print qq{                </speech>\n};
        print qq{                <narrative>\n};
        print qq{                    <p>\n};
        print qq{                        <i>\n};
        print qq{                            $para\n};
        print qq{                        </i>\n};
        print qq{                    </p>\n};
        print qq{                </narrative>\n};
        last;
    } else {
        print qq{                    <p>\n};
        print qq{                        $para\n};
        print qq{                    </p>\n};
        print qq{                    \n};
    }
}

print qq{            </debateSection>\n};
print qq{        </debateBody>\n};
print qq{    </debate>\n};
print qq{</akomaNtoso>\n};
