import textstat, unicodecsv

def listToString(s):
    str1 =  ""
    for ele in s:
        str1 += ele

    return str1

textstat.textstat.set_lang('de')

with open('Nico English phrases.csv', 'rb') as csv_file:
    sentences = unicodecsv.reader(csv_file, encoding='utf-8')

    with open('Nico rated.csv', 'wb') as csv_write:

        writer = unicodecsv.writer(csv_write, delimiter='|', encoding='utf-8')

        for sentence in sentences:

            sentvar = listToString(sentence)
            writer.writerow([sentvar, textstat.textstat.flesch_reading_ease(sentvar)])


        # print(sentvar, textstat.textstat.flesch_kincaid_grade(sentvar))



        # result = textstat.textstat.smog_index(sentence)
        # print(result)